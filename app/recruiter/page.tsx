"use client"
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Recruiter() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        jobTitle: "",
        company: "",
        companyLogo: "",
        jobLocation: "",
        experience: "",
        salary: "",
        jobType: "",
        jobMode:""
    });

    const createPost = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("/api/post/new", {
                method: "POST",
                body: JSON.stringify({
                    jobTitle: post.jobTitle,
                    company: post.company,
                    companyLogo: post.companyLogo,
                    jobLocation: post.jobLocation,
                    experience: post.experience,
                    salary: post.salary,
                    jobType: post.jobType,
                    jobMode: post.jobMode
                }),
            });

            if(response.ok){
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        }finally {
            setSubmitting(false);
        }
    }

    return (
        <div>
            <Navbar/>
            <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPost}
            />
        </div>
    )
}