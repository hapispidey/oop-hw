class Smartphone
{
    brand;
    model;
    os;
    storage;
    screen_size;
    battery;
    camera_resolution;
    processor;
    ram;
    processor_name;


    constructor(brand, model, os, storage, screen_size, battery, camera_resolution, processor, ram)
    {
        this.brand = brand;
        this.model = model;
        this.os = os;
        this.storage = storage;
        this.screen_size = screen_size;
        this.battery = battery;
        this.camera_resolution = camera_resolution;
        this.processor = processor;
        this.ram = ram;
    }

    spec()
    {   
        
        if(this.brand === "Apple")
            {
                this.processor_name = "Apple";
            }
        else
            {
                this.processor_name = "snapdragon";
            }
        
        console.log(`
        Brand             > ${this.brand}
        Model             > ${this.model}
        Operating system  > ${this.os}
        Storage capacity  > ${this.storage} Gb
        Screen size       > ${this.screen_size}\"
        Battery capacity  > ${this.battery} mAh
        Camera resolution > ${this.camera_resolution} MP
        Porcessor         > ${this.processor_name} ${this.processor}
        RAM               > ${this.ram} Gb
        `);
    }

    gaming()
    {
        if(this.os === "Android")
        {
            if(parseInt(this.battery) >= 5000, parseInt(this.processor) >= 800, parseInt(this.ram) >= 8)
            {
                console.log("Your phone is gaming phone")
            }
            else
            {
                console.log("Your phone isn't for gaming. Just play candy crush :3");
            }
        }
        else
        {
            console.log("No one play games with i-phone, lol");
        }  
    }

    antivirus()
    {
        if(this.os === "Android")
        {
            console.log("You'd better intall an antivirus app.\nYour system is weak, lol.");
        }
        else if(this.os === "Nethunter")
        {
            console.log("No need to install an antivirus, you're the antivirus");
        }
        else 
        {
            console.log("No need to install an antivirus, no one bothers to attack the apple, lol");
        }
    }

    can_pentest()
    {
        if(this.os === "Nethunter")
        {
            "You can do pentesting straight away."
        }
        else
        {
            "You need to install some application to perform pentesting."
        }
    }

}

const myphone = new Smartphone("Asus", "ROG phone 5", "Android", 512, 6.78, 6000, 8000, 888, 12);
myphone.spec();
myphone.gaming();
myphone.antivirus();
myphone.can_pentest();
