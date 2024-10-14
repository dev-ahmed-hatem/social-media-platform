import { AxiosError, AxiosResponse } from "axios";
import axios from "./axiosInstance";

export interface ErrorResponse {
    detail?: string;
    response?: {
        data?: {
            [key: string]: any;
        };
    };
    [key: string]: any;
}

interface ApiRequestParams<T> {
    method: "get" | "post" | "patch" | "delete";
    endpoint: string;
    data?: T;
    headers?: {};
    successCallback?: <R>(response?: R) => void;
    errorCallback?: <E>(error?: E) => void;
    finalCallback?: () => void;
    setPost?: (loading: boolean) => void;
}

export const apiRequest = async <T>({
    method,
    endpoint,
    data,
    headers,
    successCallback,
    errorCallback,
    finalCallback,
    setPost,
}: ApiRequestParams<T>): Promise<void> => {
    if (setPost) setPost(true);
    try {
        const response = await axios.request({
            url: endpoint,
            method: method,
            data: method !== "get" ? data : undefined,
            headers: headers,
        });
        if (successCallback) successCallback<AxiosResponse>(response);
    } catch (error) {
        if (errorCallback) errorCallback<AxiosError>(error as AxiosError);
    } finally {
        if (setPost) setPost(false);
        if (finalCallback) finalCallback();
    }
};
