export function getStrapiMedia(url) {
  const config = useRuntimeConfig()
  if (url.startsWith("/")) {
    return config.strapiBaseUri ? `${config.strapiBaseUri}${url}` : `http://127.0.0.1:1337${url}`;
  }
  return config.strapiBaseUri ? `${config.strapiBaseUri}/${url}` : `http://127.0.0.1:1337/${url}`;;
}

export const useFoo = () => {
  return useState('foo', () => 'bar')
}