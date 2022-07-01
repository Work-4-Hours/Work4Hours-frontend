import swal from 'sweetalert';

export const Alert = (title, message, icon, button) => {
  swal({
    title: `${title}`,
    text: `${message}`,
    icon: `${icon}`,
    button: `${button}`,
  });
}
