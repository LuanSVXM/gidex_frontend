
export default class Util {

    static async convertBase64(img) {

        return new Promise(resolve => {

            let string64

            const reader = new FileReader();

            reader.readAsDataURL(img);
           
            reader.onload = () => {
                
                string64 = reader.result;

                resolve(string64);
                
              };
        })
    }

}