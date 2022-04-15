type Props = {
  page: number;
  totalPages: number | undefined;
  onLeftClick: () => void;
  onRightClick: () => void;
};

export const Pagination = ({
  page,
  totalPages,
  onLeftClick,
  onRightClick,
}: Props) => {
  return (
    <div>
      <button onClick={onLeftClick}></button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}></button>
    </div>
  );
};
