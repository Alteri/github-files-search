import React, { useState } from "react";
import { ListStyled } from "./styled";
import { ItemList } from "../ItemList";

type ListProps = {
  options: {
    id: number;
    fileName: string;
    description: string;
    url: string;
    ownerName: string;
    avatar_url: string;
  }[];
};

const List = ({ options }: ListProps) => {
  const [isOpen, setIsOpen] = useState(0);
  const handleShow = (id: number) => setIsOpen(id);
  return (
    <ListStyled>
      {options.map(
        ({ id, fileName, url, description, ownerName, avatar_url }, index) => (
          <ItemList
            key={index}
            id={id}
            fileName={fileName}
            fileUrl={url}
            description={description}
            ownerName={ownerName}
            avatarUrl={avatar_url}
            handleClick={handleShow}
            isOpen={isOpen === id}
          />
        )
      )}
    </ListStyled>
  );
};

export default List;
