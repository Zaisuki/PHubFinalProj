import express, { Express, Request, Response } from 'express';
import { Check, Class, Connect } from '../models/classModel/class';
import { Professor, Student, UserCredentials } from '../models/user';
import { NotificationHolder } from '../models/notification';
import { Types } from 'mongoose';
import { io } from '..';

export const addReminderNotification = async () => {
    try {
        const oneHourLater = new Date(Date.now() + 60 * 60 * 1000);
        const checkResult = await Check.find({ dueDate: { $gte: Date.now(), $lte: oneHourLater } }).populate({ path: 'class', populate: { path: 'students' } });
        for (const classObj of checkResult) {
            const header = `Reminder: ${classObj.postTitle}`;
            const link = classObj._id.toString();
            const reminderExists = await NotificationHolder.exists({ header: header, link: link });

            console.log(reminderExists);
            if (!reminderExists) {
                const description = classObj.postDescription;
                const classID = classObj.class._id;
                const reminder = await new NotificationHolder({
                    header,
                    description,
                    link,
                    class: classID,
                }).save();
                for (const student of (classObj as any)?.class.students) {
                    const studentObj = await UserCredentials.findOne({ studentInformation: student._id });
                    if (studentObj) {
                        io.emit('reminder_notification', reminder);
                        studentObj.notification.push(reminder._id);
                        await studentObj.save();
                    }
                }
            }
        }
        const connectResult = await Connect.find({ dueDate: { $gte: Date.now(), $lte: oneHourLater } }).populate({ path: 'class', populate: { path: 'students' } });
        for (const classObj of connectResult) {
            const header = `Reminder: ${classObj.postTitle}`;
            const link = classObj._id.toString();
            const reminderExists = await NotificationHolder.exists({ header: header, link: link });
            if (!reminderExists) {
                const description = classObj.postDescription;
                const classID = classObj.class._id;
                const reminder = await new NotificationHolder({
                    header,
                    description,
                    link,
                    class: classID,
                }).save();
                for (const student of (classObj as any)?.class.students) {
                    const studentObj = await UserCredentials.findOne({ studentInformation: student._id });
                    if (studentObj) {
                        io.emit('reminder_notification', reminder);
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
export const addTaskNotification = async (classType: string, classObj: any) => {
    try {
        const reminderExists = await NotificationHolder.exists({ link: classObj._id });
        if (!reminderExists) {
            const reminder = await new NotificationHolder({
                header: `${classType}: ${classObj.postTitle}`,
                description: classObj.postDescription,
                link: classObj._id,
                class: classObj.class,
            }).save();
            const classResult = await Class.findById(classObj.class);
            for (const student of (classResult as any)?.students) {
                const studentObj = await UserCredentials.findOne({
                    studentInformation: student._id,
                });
                if (studentObj) {
                    io.emit('reminder_notification', reminder);
                    studentObj.notification.push(reminder._id);
                    await studentObj.save();
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
};
export const getUserNotification = async (userID: string) => {
    try {
        const notifications = await Student.findById(userID, 'userCredentials')
            .populate({
                path: 'userCredentials',
                populate: {
                    path: 'notification',
                    options: { sort: { createdAt: -1 } },
                },
            })
            .exec();

        if (notifications) {
            console.log(notifications);
            return { message: notifications, httpCode: 200 };
        }

        return { 'message': 'No user found', 'httpCode': 500 };
    } catch (error) {
        return { 'message': 'No user found', 'httpCode': 500 };
    }
};
