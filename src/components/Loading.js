import { Loader } from 'styles/components/loaderStyle'

export default function Loading({ isLoading }) {
  if (!isLoading) return null

  return (
    <Loader>
      <span>C</span>
      <span>a</span>
      <span>r</span>
      <span>r</span>
      <span>e</span>
      <span>g</span>
      <span>a</span>
      <span>n</span>
      <span>d</span>
      <span>o</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </Loader>
  )
}
