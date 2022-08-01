
  import {  notification } from 'antd';
  

  export const appNotification = (placement, message, description) => {
    notification.info({
      message: `${message} ${placement}`,
      description:`${description}`,
      placement,
    });
  };