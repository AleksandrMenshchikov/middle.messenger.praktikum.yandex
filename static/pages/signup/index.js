import Cleave from '../../vendors/cleave/cleave';
import cleavePhone from '../../vendors/cleave/cleave-phone.ru';

const cleave = new Cleave("[name='signup-tel']", {
  phone: true,
  phoneRegionCode: "ru",
});


