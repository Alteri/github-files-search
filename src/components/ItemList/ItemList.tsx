import React from "react";
import {
  ItemListStyled,
  ModalWrapper,
  ModalHeader,
  ExitIcon,
  FileName,
} from "./styled";
import { Text } from "../Text";
import { Grid } from "../Grid";
import { Link, User } from "../Icon";

type ItemListProps = {
  id: number;
  fileName: string;
  fileUrl: string;
  ownerName: string;
  avatarUrl: string;
  description: string;
  handleClick: (id: number) => void;
  isOpen: boolean;
};

const ItemList = ({
  id,
  fileName,
  fileUrl,
  ownerName,
  description,
  avatarUrl,
  handleClick,
  isOpen,
}: ItemListProps) => {
  return (
    <ItemListStyled
      as="li"
      templateColumns="minmax(20px, max-content) auto"
      gap="16"
    >
      <Text>{id}.</Text>
      <div>
        <Grid templateColumns="auto max-content" alignContent="center" gap="8">
          <Grid
            templateColumns="repeat(2, max-content)"
            alignContent="center"
            gap="4"
          >
            <FileName>{fileName}</FileName>
            <a href={fileUrl} target="_blank" rel="noreferrer">
              <Link />
            </a>
          </Grid>
          <Grid
            templateColumns="repeat(2, max-content)"
            alignContent="center"
            gap="4"
            onAction={() => handleClick(id)}
          >
            <Text>{ownerName}</Text>
            <User />
          </Grid>
        </Grid>
        {description && <Text>{description}</Text>}
      </div>
      {isOpen && (
        <ModalWrapper gap="8">
          <ModalHeader>
            <Text textType="h1">{ownerName}</Text>
            <Text>{fileName}</Text>
            <ExitIcon onClick={() => handleClick(0)} />
          </ModalHeader>
          <img src={avatarUrl} alt={`owner ${ownerName} avatar`} width="100%" />
        </ModalWrapper>
      )}
    </ItemListStyled>
  );
};

export default ItemList;
