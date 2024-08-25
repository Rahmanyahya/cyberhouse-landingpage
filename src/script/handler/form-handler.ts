
interface FormObject {
    [key: string]: string;
}



 export default function handleFormSubmit() {
    const form = document.getElementById('orderForm') as HTMLFormElement | null;
    
    if (!form) {
        console.error('Form not found');
        return;
    }

    const formData = new FormData(form);
    const formObject: FormObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value as string;
    });

    const nama = formObject['first name'] + " " + formObject['last name']

   const url = `https://wa.me/6289697094939?text=Order%20Kelas%20Cyber%20House%0A%0ANama:%20${nama}%0A%0ANomor%20Telephone:%20${formObject['noTelephone']}%0A%0ASekolah%20%2F%20Bekerja:%20${formObject['kesibukan']}%0A%0AEmail:%20${formObject['email']}`
   window.open(url,"_blank")
}