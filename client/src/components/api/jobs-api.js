import { del, get, post } from "./requester";
const baseURL = "http://localhost:3030/jsonstore";

export const getAllJobs = async () => {
  const result = await get(`${baseURL}/jobs`);
  const jobs = Object.values(result);

  return jobs;
};

export const getJobById = async (jobId) => {
  const job = await get(`${baseURL}/jobs/${jobId}`);
  return job;
};

export const createJob = async (jobData) => {
  const create = await post(`${baseURL}/jobs`,jobData);
  return create;
}

export const deleteJob = async (jobId) => {
  const delApp = await del(`${baseURL}/jobs/${jobId}`)
  return delApp
}