import multer from 'multer';
import path from 'path';
import express, { Express, Request, Response } from 'express';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

import config from '../config/firebase.config';

initializeApp(config.firebaseConfig);
export const storage = getStorage();
export const upload = multer({ storage: multer.memoryStorage() });
