import React from "react";
import PaginationContainer from "../../common/layout/PaginationContainer";
import PaginationButton from "../../common/ui/PaginationButton";

const AppointmentPagination = () => {
  return (
    <PaginationContainer text="Showing 4 of 24 appointments">
      
      <PaginationButton icon>
        <span className="material-symbols-outlined text-sm">
          chevron_left
        </span>
      </PaginationButton>

      <PaginationButton active>1</PaginationButton>

      <PaginationButton>2</PaginationButton>
      <PaginationButton>3</PaginationButton>

      <PaginationButton icon>
        <span className="material-symbols-outlined text-sm">
          chevron_right
        </span>
      </PaginationButton>

    </PaginationContainer>
  );
};

export default AppointmentPagination;