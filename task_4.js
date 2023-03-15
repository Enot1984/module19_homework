function KitchenDevice (deviceType, power, connectType, color) {
    this.voltage = '220v',
    this.deviceType = deviceType,
    this.power = power,
    this.connectType = connectType,
    this.color = color  
}

KitchenDevice.prototype.getPowerOn = function (time) {
    console.log(`Устройство включится через ${time} секунд, после нажатия кнопки`)
};

function CookingDevice (deviceType, power, connectType, color, chargePower, chargeTime) {
    this.deviceType = deviceType,
    this.power = power,
    this.connectType = connectType,
    this.color = color,
    this.chargePower = chargePower,
    this.chargeTime = chargeTime  
};

CookingDevice.prototype = new KitchenDevice()

CookingDevice.prototype.getPowerOn = function (time) {
    console.log(`Устройство начнёт работу через ${time} секунд, после нажатия кнопки "Пуск"`)
};

const kettle = new KitchenDevice('чайник', '1500 Вт', 'smart', 'silver');
const toaster = new KitchenDevice('тостер', '1000 Вт', 'от сети', 'red');
const blender = new CookingDevice('блендер', '700 Вт', 'wireless', 'white', '50 Вт', '2 часа');

console.log (kettle)
kettle.getPowerOn(0);
console.log (toaster)
toaster.getPowerOn(10);
console.log (blender)
blender.getPowerOn(5);
