"use server" ;

export const stkPushQuery = () =>{
    try {
        
    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return { error: "An error occurred. Please try again" };
        
    }
}
