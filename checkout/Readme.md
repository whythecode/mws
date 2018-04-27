# Checkout API

## Configuration

Environment variables:

| name | required | description |
|------|----------|-------------|
| REDIS_HOST | yes | under which host REDIS can be found by the Api |
| QUEUE_PREFIX | yes | the job queue's namespace |

## API

### Create Order

```
{
    "email": "string",
    "price": 1.0,
    "provider": "paypal"
}
```