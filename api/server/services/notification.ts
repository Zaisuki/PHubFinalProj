import express, { Express, Request, Response } from "express";
import { Check } from "../models/classModel/class";
import { Professor, Student, UserCredentials } from "../models/user";
import { Notification } from "../models/notification";
import { Types } from "mongoose";

export const addReminderNotification = async () => {
  try {
    const oneHourLater = new Date(Date.now() + 60 * 60 * 1000);
    const checkResult = await Check.find({
      dueDate: { $gte: Date.now(), $lte: oneHourLater },
    }).populate({ path: "class", populate: { path: "students" } });

        for (const classObj of checkResult) {
            const reminderExists = await Notification.exists({ link: classObj._id });
            if (!reminderExists) {
                const reminder = await new Notification({
                    header: `Reminder: ${classObj.postTitle}`,
                    content: classObj.postDescription,
                    link: classObj._id,
                    class: classObj.class,
                }).save();
                for (const student of (classObj as any)?.class.students) {
                    const studentObj = await UserCredentials.findOne({ studentInformation: student._id });
                    if (studentObj) {
                        // TODO: add websocket here
                        console.log(studentObj);
                        studentObj.notification.push(reminder._id);
                        await studentObj.save();
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};
export const addNotification = async () => {
    try {
        const oneHourLater = new Date(Date.now() + 60 * 60 * 1000);
        const checkResult = await Check.find({ dueDate: { $gte: Date.now(), $lte: oneHourLater } }).populate({ path: 'class', populate: { path: 'students' } });

        for (const classObj of checkResult) {
            const reminderExists = await Notification.exists({ link: classObj._id });
            if (!reminderExists) {
                const reminder = await new Notification({
                    header: `Reminder: ${classObj.postTitle}`,
                    content: classObj.postDescription,
                    link: classObj._id,
                    class: classObj.class,
                }).save();
                for (const student of (classObj as any)?.class.students) {
                    const studentObj = await UserCredentials.findOne({ studentInformation: student._id });
                    if (studentObj) {
                        // TODO: add websocket here
                        console.log(studentObj);
                        studentObj.notification.push(reminder._id);
                        await studentObj.save();
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};
export const getUserNotification = async (userID: string, userType: string) => {
  try {
    const userObjectID = new Types.ObjectId(userID);
    const userDetails =
      userType === "student"
        ? await Student.findById(userID, "userCredentials")
            .populate({
              path: "userCredentials",
              populate: {
                path: "notification",
              },
            })
            .exec()
        : await Professor.findById(userID, "userCredentials")
            .populate({
              path: "userCredentials",
              populate: {
                path: "notification",
              },
            })
            .exec();

    if (userDetails) {
      return { message: { userDetails, userType }, httpCode: 200 };
    }

    return { message: "No user found", httpCode: 500 };
  } catch (error) {
    return { message: "No user found", httpCode: 500 };
  }
};
