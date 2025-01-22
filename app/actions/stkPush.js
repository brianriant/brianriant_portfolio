// https://nextjs-mpesa.codewithriz.com/server-setup

"use server";

export const stkPush = () => {
    try {
        
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return { error: "An error occurred. Please try again" };
        
    }
}