import React, { Suspense, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SuspenseLoader from '../../../components/Loaders/SuspenseLoader'
import { getAllAgentExcursions } from '../../../redux/slices/agentExcursionSlice'
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

    let destination = ''
    useEffect(() => {
        dispatch(getAllAgentExcursions({ destination, category, search }))
    }, [dispatch, destination, category, search])



    return (
        <div className=''>
            <div className="bg-white rounded shadow-sm p-6">
                <div className=''>
                    <SearchHomePage
                        viewCategory={viewCategory}
                        setViewCategory={setViewCategory}
                        setCategory={setCategory}
                        setSearch={setSearch}
                    />
                    <div className=''>
                        <div className=''>
                            <div className=''>
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
            </div>
        </div>
    )
}

export default SearchingResultPage