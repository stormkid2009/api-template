# REST API Best Practices:

## Versioning:
```
> api/v1/users
> api/v2/users
```

## Name resources in plural:
> like 
> /products    
> /movies   ..etc

## Accept and Respond with data in json format:
> json format is standard with all languages

## Respond with standard HTTP error codes:
> res.status(200)  means OK    
> res.status(404) means not found  
> res.status(500)  server error   ..etc

## Avoid verbs in endpoint names:
```
> GET "/api/v1/movies"  (✓)
> GET "/api/v1/getAllmovies" (x)
```

## Group associated resources together:

## Integrate Filtering & Sorting and Pagination:

## Use data caching for performance improvements:

## Good Security practices:

## Document API properly:
