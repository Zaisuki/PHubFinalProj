import express, { Express, Request, Response } from 'express';
import { Check } from '../models/classModel/class';
import { Student } from '../models/user';
import { Notification } from '../models/notification';

export const addReminderNotification = async () => {
    try {
        const oneHourLater = new Date(Date.now() + 60 * 60 * 1000);
        const checkResult = await Check.find({ dueDate: { $gte: Date.now(), $lte: oneHourLater } }).populate({ path: 'class', populate: { path: 'students' } });
        // for (const classObj of (studentResult?.studentSubjects as any)?.class) {

        for (const classObj of checkResult) {
            const reminder = await Notification({
                header: `Reminder: ${classObj.postTitle}`,
                content: classObj.postDescription,
                link: classObj._id,
                class: classObj.class,
            });
            for (const student of (classObj as any)?.students) {
                await Student.findById(student._id);
            }
        }
    } catch (error) {
        console.log(error);
    }
};
