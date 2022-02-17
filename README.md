## Chatbot Whatsapp (OpenSource)

### ATENCION
> 💥💥 Si te aparece el Error Multi-device es porque tienes la cuenta de whatsapp afiliada al modo "BETA de Multi dispositivo" por el momento no se tiene soporte para esas personas si tu quieres hacer uso de este __BOT__ debes de salir del modo BETA y intentarlo de la manera tradicional

#### Actualización

| Feature  | Status |
| ------------- | ------------- |
| Dialogflow  | ✅  |
| MySQL  | ✅  |
| JSON File  | ✅  |
| QR Scan (route) | ✅ |
| Easy deploy heroku  | ✅  |
| Buttons | ✅ |
| Add support ubuntu/linux | ✅ |

## Requisitos
- node v14 o superior
- VSCode (Editor de codigo) [Descargar](https://code.visualstudio.com/download)
- MySql (opcional) solo aplica si vas a usar el modo 'mysql'
- Dialogflow (opcional) solo aplica si vas a usar el modo 'dialogflow'

## Instruciones
__Instalar dependencias (npm install)__
> Ubicate en le directorio que descargaste y via consola o terminal ejecuta el siguiente comando

`npm install --unsafe-perm --ignore-scripts` 

__Configurar .env__
> Con el editor de texto crea un archivo `.env` el cual debes de guiarte del archivo `.env.example`

```
######DATABASE: none, mysql, dialogflow

DEFAULT_MESSAGE=false
SAVE_MEDIA=false
PORT=3000
DATABASE=none
LANGUAGE=es
SQL_HOST=
SQL_USER=
SQL_PASS=
SQL_DATABASE=
```

__Ejecutar el script__
> Ubicate en le directorio que descargaste y via consola o terminal ejecuta el siguiente comando
`npm run start`


__Whatsapp en tu celular__
> Ahora abre la aplicación de Whatsapp en tu dispositivo y escanea el código QR
<img src="https://i.imgur.com/RSbPtat.png" width="500"  />
Visitar la pagina 
`http://localhost:3000/qr` 

![](https://i.imgur.com/Q3JEDlP.png)

__Listo 😎__
> Cuando sale este mensaje tu BOT está __listo__ para trabajar!
![](https://i.imgur.com/eoJ4Ruk.png)

## ¿Como usarlo el chatbot de whatsapp?
> Escribe un mensaje al whatsapp que vinculaste con tu BOT
