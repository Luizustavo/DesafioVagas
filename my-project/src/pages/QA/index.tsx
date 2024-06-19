import React from "react";
import NavBar from "../../components/molecules/navBar";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/input";
import Typography from "../../components/atoms/typography";
import JobList from "../../components/organisms/jobList";
import JobForm from "../../components/organisms/jobForm";

const QA: React.FC = () => {
    return (
        <div>
            <Typography variant="title">Este é um Título</Typography>
            <JobList />
            <JobForm />
            <Button>Este é um botão</Button>
        </div>
    );
}

export default QA;