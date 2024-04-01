import { BsExclamationTriangle } from "react-icons/bs";

export const AccessDenied = ({ message }: { message?: string }) => {
    return (
        <div className="w-full flex flex-col justify-center items-center space-y-4 p-4">
            <BsExclamationTriangle className="h-10 w-10 text-destructive" />
            <div className="text-lg text-center">
                {message || "Access Denied!"}
            </div>
        </div>
    )
};
