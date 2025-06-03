import { Container, List, Section } from './TracksList.styled'
import DefaultElement from '../NoResultElement/NoResultElement'
import Pagination from '../Pagination/Pagination'
import useTrackList from '../../hooks/useTrackList'
import { useEffect, useState } from 'react'
import ListLoader from '../../../../components/UI/Loader/ListLoader'
import { TrackCard } from '../../../../components/modules/TrackCard'
import type { NullableAudioEl } from '@/types'

function TracksList() {
  const [currentPlay, setCurrentPlay] = useState<NullableAudioEl>(null)
  const { listLoading, list, currentPage, setCurrentPage, totalPages } =
    useTrackList()

  useEffect(() => {
    const prevButton = document.querySelector('.page-previous a')
    const nextButton = document.querySelector('.page-next a')
    if (prevButton) {
      prevButton.setAttribute('data-testid', 'pagination-prev')
    }
    if (nextButton) {
      nextButton.setAttribute('data-testid', 'pagination-next')
    }
  }, [currentPage, totalPages])

  return (
    <>
      {
        <Section>
          <Container
            style={list.length === 0 ? { justifyContent: 'center' } : {}}
          >
            {list.length > 0 ? (
              <List data-loading={listLoading ? 'true' : 'false'}>
                {list.map((item) => (
                  <TrackCard
                    key={item.id}
                    data={item}
                    setCurrentPlay={setCurrentPlay}
                    currentPlay={currentPlay}
                  />
                ))}
              </List>
            ) : (
              <DefaultElement />
            )}
            {list.length > 0 && totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </Container>
        </Section>
      }
      {listLoading && <ListLoader />}
    </>
  )
}

export default TracksList
