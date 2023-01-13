import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SuspenseLoader from '../../../components/Loaders/SuspenseLoader'
import { getAllExcursions } from '../../../redux/slices/excursionSlice'
import SearchFunctionalitySection from './SearchFunctionalitySection'
import SearchHomePage from './SearchHomePage'
import SearchRecentlyViewedSection from './SearchRecentlyViewedSection'
const SearchListViewSection = React.lazy(() => import('./SearchListViewSection'))

function SearchingResultPage() {
    const dispatch = useDispatch()
    const params = useParams()
    console.log(params);

    const [viewCategory, setViewCategory] = useState(false)
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState('')
    const [rating, setRating] = useState('')
    const [duration, setDuration] = useState('')
    
    let destination =''
    let isOffer = ''
    let isCombo = ''
    useEffect(() => {
        if(params.slug === 'isOffer'){
            isOffer = "true"
            dispatch(getAllExcursions({ isOffer, category, search, rating, duration}))
        }else if(params.slug === 'isCombo'){
            isCombo = "true"
            dispatch(getAllExcursions({ isCombo, category, search, rating, duration }))
        }else {
            destination = params.slug
            dispatch(getAllExcursions({ destination, category, search, rating, duration }))
        }

    }, [dispatch, destination, category, search, rating, duration])



    return (
        <div className=''>
            <SearchHomePage
                viewCategory={viewCategory}
                setViewCategory={setViewCategory}
                setCategory={setCategory}
                setSearch={setSearch}
            />
            <div className=''>
                <div className='lg:grid grid-cols-12 gap-5'>
                    <div className='col-span-3'>
                        <SearchFunctionalitySection
                            viewCategory={viewCategory}
                            setViewCategory={setViewCategory}
                            setRating={setRating}
                            setDuration={setDuration}
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