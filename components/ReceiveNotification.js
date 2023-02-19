import React from 'react'
import * as PushAPI from "@pushprotocol/restapi";


const Receiver = async (props) => {

    const notifications = await PushAPI.user.getFeeds({
        user: 'eip155:5:0xB78721b29c028B16ab25f4a2adE1d25fbf8B2d74', // user address in CAIP
        env: 'staging'
      });
      console.log("Notifications: ", notifications);
      return notifications;
}

export default function ReceiveNotification(props) {
    Receiver();
  return (
    <div>ReceiveNotification</div>
  )
}
