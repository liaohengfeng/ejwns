export default {
  async fetch(request) {
    const url = new URL(request.url);
    url.hostname = 'i.pximg.net';

    const proxyRequest = new Request(url, request);
    proxyRequest.headers.set('Referer', 'https://www.pixiv.net/');

    return fetch(proxyRequest);
  },
};
