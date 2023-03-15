class KitchenDevice {
  constructor (deviceType, power, connectType, color) {
      this.voltage = '220v';
      this.deviceType = deviceType;
      this.power = power;
      this.connectType = connectType;
      this.color = color;  
  }

  getPowerOn = function (time) {
      return `Устройство включится через  ${time} секунд, после нажатия кнопки` 
  }
};

class CookingDevice extends KitchenDevice {
  constructor (deviceType, power, connectType, color, chargePower, chargeTime, voltage) {
      super(voltage);
      this.deviceType = deviceType;  
      this.power = power;
      this.connectType = connectType;
      this.color = color;
      this.chargePower = chargePower;
      this.chargeTime = chargeTime;
  }

  getPowerOn = function (time){
      return `Устройство начнет работу через  ${time} секунд, после нажатия кнопки "Пуск"`
  }
}
  const kettle = new KitchenDevice('чайник', '1500 Вт', 'smart', 'silver');
  const toaster = new KitchenDevice('тостер', '1000 Вт', 'от сети', 'red');
  const blender = new CookingDevice('блендер', '700 Вт', 'wireless', 'white', '50 Вт', '2 часа');

console.log(kettle);
console.log(kettle.getPowerOn(0));
console.log(toaster);
console.log(toaster.getPowerOn(10));
console.log(blender);
console.log(blender.getPowerOn(5));