"use server ";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState: any,formData:
    FormData) {
        const rawFormData = {
            lastname: formData.get("lastname") as string,
            firstname: formData.get("firstname") as string,
            company: formData.get("company") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        if (!rawFormData.lastname) {
            return {
                status: "error",
                message: "姓を入力してください",
            };
        }
    }