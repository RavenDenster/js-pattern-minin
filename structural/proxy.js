const networkFetch = (url) => `${url} - ответс сервера`;

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];
        if (cache.has(url)) {
            return `${url} - ответ из кэша`;
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    },
});
const vfdf = 1;

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));
