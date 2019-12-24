### Get file extension from Url

```javascript
> var picUrl = "https://uploads.toptal.io/blog/image/956/toptal-blog-image-1426676395222.jpeg"
undefined
>
> var arr = picUrl.split("/");
undefined
> arr
[ 'https:',
  '',
  'uploads.toptal.io',
  'blog',
  'image',
  '956',
  'toptal-blog-image-1426676395222.jpeg' ]
>
> arr[-1]
undefined
> arr[0]
'https:'
>
> arr[arr.length-1]
'toptal-blog-image-1426676395222.jpeg'
> ext = arr[arr.length-1].split(".")[1]
'jpeg'
>
```