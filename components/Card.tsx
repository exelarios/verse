import Image from "next/image";
import { useState, useCallback } from "react";

import Menu from "@verse/components/Menu";

import DotMenu from "../assets/tokens/DotMenu";

type CardProps = {
  userId: string,
  username: string,
  photo: string,
  location?: string
}

type HeaderProps = {
  username: string,
  location?: string,
  setOpenMenu: any
}

const Header = (props: HeaderProps) => {

  const { username, location, setOpenMenu } = props;

  const handleOpenMenuModal = useCallback(() => {
    setOpenMenu(true);
  }, [setOpenMenu]);

  return (
    <div className="flex justify-between p-1">
      <div className="flex">
        <div className="relative w-9 h-9 m-auto">
          <Image
            className="rounded-full"
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?fit=crop&w=500&q=80"
            layout="fill"
            draggable="false"
            objectFit="cover"
            alt="random dude"
          />
        </div>
        <div className="flex flex-col my-auto ml-2">
          <h1 className="text-base">
            {username}
          </h1>
          {location &&
            <h2 className="text-xs capitalize">
              {location}
            </h2>
          }
        </div>
      </div>
      <button className="flex w-6" onClick={handleOpenMenuModal}>
        <DotMenu className="m-auto"/>
      </button>
    </div>
  );
}

const Card = (props: CardProps) => {

  const { userId, username, photo, location } = props;

  const [openMenu, setOpenMenu] = useState(false);

  const handleOnClose = useCallback(() => {
    setOpenMenu(false);
  }, [setOpenMenu]);

  return (
    <div className="w-full xs:w-[500px]">
      <div className="border border-solid border-black-255 border-b-0">
        <Header username={username} location={location} setOpenMenu={setOpenMenu}/>
      </div>
      <div className="relative">
        <img
          draggable="false"
          className="max-h-7xl w-full"
          src={photo}
          alt="the desert"
        />
      </div>
      {openMenu && 
        <Menu onClose={handleOnClose}/>
      }
    </div>
  );
}

Card.defaultProps = {
  username: "notderic",
}

export default Card;