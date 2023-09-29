import React from 'react';
import ReactPaginate from 'react-paginate';
import { classname } from 'utils';
import { ArrowLeftWithoutStickIcon } from 'icons';

import './numeric-paginate.scss';

type Props = {
    page: number;
    lastPage: number;
    onChange: (page: number) => void;
};

const cn = classname('numeric-paginate');

export const NumericPaginate = (props: Props) => {
    const { page, lastPage, onChange } = props;

    return (
        <ReactPaginate
            className={cn()}
            nextLabel={<ArrowLeftWithoutStickIcon />}
            previousLabel={<ArrowLeftWithoutStickIcon />}
            marginPagesDisplayed={1}
            forcePage={page - 1}
            pageCount={lastPage}
            onPageChange={({ selected }) => onChange(selected + 1)}
        />
    );
};
