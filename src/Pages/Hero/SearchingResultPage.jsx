import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SuspenseLoader from '../../components/Loaders/SuspenseLoader'
import { getAllExcursions } from '../../redux/slices/excursionSlice'
import SearchFunctionalitySection from '../Searching/SearchFunctionalitySection'
import SearchHomePage from '../Searching/SearchHomePage'
// import SearchListViewSection from '../Searching/SearchListViewSection'
import SearchRecentlyViewedSection from '../Searching/SearchRecentlyViewedSection'
const SearchListViewSection = React.lazy(() => import('../Searching/SearchListViewSection'))

function SearchingResultPage() {
    const dispatch = useDispatch()
    const params = useParams()

    const destination = params.slug

    const [viewCategory, setViewCategory] = useState(false)
    const [category, setCategory] = useState('')


    useEffect(() => {

        dispatch(getAllExcursions({ destination, category }))
    }, [dispatch, destination, category])



    return (
        <div className='bg-light lg:py-10'>
            <SearchHomePage
                viewCategory={viewCategory}
                setViewCategory={setViewCategory}
                setCategory={setCategory}
            />
            <div className='lg:max-w-screen-xl lg:mx-auto'>
                <div className='lg:grid grid-cols-12 gap-5'>
                    <div className='col-span-3'>
                        <SearchFunctionalitySection
                            viewCategory={viewCategory}
                            setViewCategory={setViewCategory}
                        />
                    </div>
                    <div className='col-span-9'>
                        <Suspense fallback={
                        <div className=''>
                           <SuspenseLoader /> 
                        </div>
                    }>
                            <SearchListViewSection />
                        </Suspense>
                    </div>
                </div>
                <div className=''>
                    <SearchRecentlyViewedSection />
                </div>
            </div>
        </div>
    )
}

export default SearchingResultPage