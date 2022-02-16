# Strapi filter count issue

This repo creates a reproduction counting filtered data.

When we have a repeatable component and we filter with $or on the component (in this case post.tags.tag), we get the wrong count because each $or entry creates a left join.

Sample request:

```json
{
    "filters": {
        "$and": [
            {
                "$or": [
                    {
                        "tags": {
                            "[tag][$eq]": "Music"
                        }
                    },
                    {
                        "tags": {
                            "[tag][$eq]": "Daily"
                        }
                    }
                ]
            }
        ]
    }
}
```

QS Stringified URL: 

`http://localhost:1337/api/posts?populate=*&filters%5B%24and%5D%5B0%5D%5B%24or%5D%5B0%5D%5Btags%5D%5B%5Btag%5D%5B%24eq%5D%5D=Music&filters%5B%24and%5D%5B0%5D%5B%24or%5D%5B1%5D%5Btags%5D%5B%5Btag%5D%5B%24eq%5D%5D=Daily`

This returns 2 items (correct), but shows a total amount of 5 (incorrect).

