import { Pagination, Stack } from "@mui/material";
import { FC } from "react";

import { useAppContext } from "../../hooks";
import css from './MoviePagination.module.css'

interface IProps {
    totalPages:number;
}

const MoviePagination: FC<IProps> = ({totalPages}) => {
    const { currentPage, setCurrentPage} = useAppContext();
    const handlePageChange = (page: number): void => {
        setCurrentPage(page.toString())
    }

    return (
        <div className={css.paginationMain}>
            <Stack className={css.paginationPosition}>
                <Pagination count={totalPages} page={+currentPage} color="primary" size={"large"} onChange={(_, page) => handlePageChange(page)}/>
            </Stack>
        </div>
    );
}

export { MoviePagination };