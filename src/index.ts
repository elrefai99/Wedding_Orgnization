import 'dotenv/config'
import express, { Application } from 'express'
import MongoDB from './Database/Mongo.DB'
import setupOther from './Utils/Others/setup.other'
import indexHooks from './Hooks/index.hooks'

const app: Application = express()

// Connect Database MongoDB
MongoDB(app)

// Setup send json and other
setupOther(app)

// Routers
indexHooks(app)

app.get('*', (_req, res) => {
    res.status(404).json({ err: 'Not Found' })
})
