import {Schema, models, model} from 'mongoose';
import mongoose from 'mongoose';

const jobSchema = new Schema({
    jobTitle:{
        type: String,
        required: [true, "Job title is required!"]
    },
    company:{
        type: String,
        required: [true, "Company is required!"]
    },
    companyLogo:{
        type: String,
        required: [true, "Company logo is required!"]
    },
    jobLocation:{
        type: String,
        required:[true, "Job location is required"]
    },
    experience: {
        type: String,
        required:[true, "Experience is required!"]
    },
    salary: {
        type: String,
        required: [true, "Package is required!"]
    },
    jobType: {
        type: String,
        required: [true, "Job type is required"]
    },
    jobMode:{
        type: String,
        required:[true, "Job Mode is required"]
    },
    postedTime:{
        type: Date,
        default: Date.now
    }
});

const Job = mongoose.models.jobs || model("jobs", jobSchema);

export default Job;