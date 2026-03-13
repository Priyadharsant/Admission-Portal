const { MongoClient } = require("mongodb");

const mongoUri = process.env.MONGO_URI;
const leadDbName = process.env.LEAD_DB;
const adminDbName = process.env.ADMIN_DB;
const analyticsDbName = process.env.ANALYTICS_DB;

let client;
let leadDb;
let adminDb;
let analyticsDb;

async function connectToDatabase() {
    if (client) {
        return;
    }

    client = new MongoClient(mongoUri);

    try {
        await client.connect();
        console.log("Connected to MongoDB");

        leadDb = client.db(leadDbName);
        adminDb = client.db(adminDbName);
        analyticsDb = client.db(analyticsDbName);

        console.log(`Connected to database: ${leadDbName}`);
        console.log(`Connected to database: ${adminDbName}`);
        console.log(`Connected to database: ${analyticsDbName}`);
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
}

async function getCollection(dbName, collectionName) {
    if (!client) {
        await connectToDatabase();
    }

    const db = client.db(dbName);
    return db.collection(collectionName);
}

async function getAdminDb() {
    if (!adminDb) {
        await connectToDatabase();
    }
    return adminDb;
}

async function getLeadDb() {
    if (!leadDb) {
        await connectToDatabase();
    }
    return leadDb;
}

async function getAnalyticsDb() {
    if (!analyticsDb) {
        await connectToDatabase();
    }
    return analyticsDb;
}
async function getApplicationsCollection() {
    const db = await getLeadDb();
    return db.collection("applications");
}

async function getLeadsCredentialCollection() {
    const db = await getLeadDb();
    return db.collection("lead_credentials");
}
async function getCollegeCollection(collectionName) {
    const db = await getAdminDb();
    return db.collection('college_details');
}


module.exports = { connectToDatabase, getCollection, getAdminDb, getLeadDb, getAnalyticsDb, getApplicationsCollection, getLeadsCredentialCollection ,getCollegeCollection};