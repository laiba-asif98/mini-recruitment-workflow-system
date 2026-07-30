import MainLayout from "../../components/layouts/MainLayout";
import InputField from "../../components/forms/InputField";
import { candidateStatus } from "../../constants/status";

import "../../styles/form.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { candidateSchema } from "../../utils/candidateSchema";
import { addCandidate } from "../../services/candidateService";
import { useNavigate } from "react-router-dom";


function AddCandidate() {

    const {

        register,
        handleSubmit,
        
        formState: { errors }

    } = useForm({

        resolver: zodResolver(candidateSchema)

    });
    const navigate = useNavigate();

    const onSubmit = async (data) => {

    await addCandidate(data);

    alert("Candidate Added Successfully!");

    navigate("/candidates");

};
    return (

        <MainLayout>

            <h1>Add Candidate</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    label="Full Name"
                    type="text"
                    placeholder="Enter Full Name"
                    register={register}
                    name="fullName"
                    error={errors.fullName}
                />

                <InputField
                    label="Email"
                    type="email"
                    placeholder="Enter Email"
                    register={register}
                    name="email"
                    error={errors.email}
                />

                <InputField
                    label="Phone"
                    type="text"
                    placeholder="Enter Phone Number"
                    register={register}
                    name="phone"
                    error={errors.phone}
                />

                <InputField
                    label="Experience"
                    type="text"
                    placeholder="Experience (Years)"
                    register={register}
                    name="experience"
                    error={errors.experience}
                />

                <InputField
                    label="Skills"
                    type="text"
                    placeholder="HTML, CSS, React"
                    register={register}
                    name="skills"
                    error={errors.skills}
                />

                <InputField
                    label="Education"
                    type="text"
                    placeholder="BS Computer Science"
                    register={register}
                    name="education"
                    error={errors.education}
                />

                {/* Status Dropdown */}

                <div className="form-group">

                    <label>Status</label>

                    <select
                        {...register("status")}
                    >

                        {
                            candidateStatus.map((status, index) => (

                                <option
                                    key={index}
                                    value={status}
                                >
                                    {status}
                                </option>

                            ))
                        }

                    </select>

                    {errors.status && (

                        <p className="error-message">
                            {errors.status.message}
                        </p>

                    )}

                </div>

                <button
                    type="submit"
                    className="submit-btn"
                >
                    Save Candidate
                </button>

            </form>

        </MainLayout>

    );

}

export default AddCandidate;