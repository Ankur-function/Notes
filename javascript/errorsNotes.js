/**
 error 1) "Converting circular structure to JSON\n --> starting at object with constructor 'ClientRequest'\n | property 'socket' -> 
     object with constructor 'TLSSocket'\n --- property '_httpMessage' closes the circle" why this error is coming and how to resolve
     it ?
 */

  /**
   1) Reason :- 

means you are trying to JSON.stringify (directly log or store) a complex object (like an axios response, an Error, or a Node.js Request/Response object) that contains circular references.

🔎 Why it happens

In Node.js, objects like req, res, or even some axios error objects contain references to themselves (like req.socket._httpMessage → req).

JSON.stringify() cannot handle this because it keeps looping in a cycle.

Example:

app.get("/", (req, res) => {
  console.log(JSON.stringify(req));  // ❌ will throw circular structure error
});

2) How to fix :-

Don’t JSON.stringify whole objects like req, res, axios error.
Instead, log only what you need:

try {
   let resp = await axios(options);
   console.log("resp status:", resp.status);
   console.log("resp data:", resp.data);
} catch (e) {
   console.error("Axios error:", e.message);
   if (e.response) {
     console.error("Status:", e.response.status);
     console.error("Data:", e.response.data);
   }
}

3) 🎯 In your case :-

Most likely you are doing something like:

res.send(error);  // ❌ sending raw error object


Instead, fix it to:

res.status(500).send({
  message: e.message,
  stack: e.stack,  // optional
});


or if it’s from axios:

res.status(e.response?.status || 500).send({
  message: e.response?.data?.error?.message || e.message,
});


👉 So the root cause: you tried to JSON-encode a raw Node.js object with circular references.
👉 The fix: only serialize the useful fields (message, status, data), not the whole object.
   *  */   



///////////////////////////////////////////////////////////////////////////////////////////

/**
 {
  "id": "592acaa1-be0d-49bb-8f45-8a0d97ed65f0-77d869be",
  "fulfillmentText": "Password has been sent successfully on Email.",
  "language_code": "en",
  "queryText": "289290",
  "webhookPayload": {
    "internalIntent": ""
  },
  "intentDetectionConfidence": 1,
  "action": "",
  "webhookSource": "",
  "parameters": {
    "number": "289290"
  },
  "fulfillmentMessages": [
    {
      "text": {
        "text": [
          "Password has been sent successfully on Email."
        ]
      }
    }
  ],
  "diagnosticInfo": {
    "webhook_latency_ms": "3403"
  },
  "webhookStatus": {
    "webhookStatus": {
      "message": "Webhook execution successful"
    },
    "webhookUsed": true
  },
  "outputContexts": [
    {
      "lifespanCount": 1,
      "name": "windows_password_reset_duplicate-followup",
      "parameters": {
        "number": "289290",
        "number.original": "289290"
      }
    }
  ],
  "intent": {
    "isFallback": false,
    "displayName": "Otp_numbers",
    "id": "ca0bf210-4cac-412b-974a-f355ab750f45"
  }
}
 */


////// for case of please try again ///////////////////////

/**
 {
  "id": "229fc7ce-a6f6-41f2-9af4-d6fe0170397f-77d869be",
  "fulfillmentText": "",
  "language_code": "en",
  "queryText": "706134",
  "webhookPayload": {},
  "intentDetectionConfidence": 1,
  "action": "",
  "webhookSource": "",
  "parameters": {
    "number": "706134"
  },
  "fulfillmentMessages": [
    {
      "text": {
        "text": [
          ""
        ]
      }
    }
  ],
  "diagnosticInfo": {
    "webhook_latency_ms": "4892"
  },
  "webhookStatus": {
    "webhookStatus": {
      "code": 4,
      "message": "Webhook call failed. Error: DEADLINE_EXCEEDED, State: URL_TIMEOUT, Reason: TIMEOUT_WEB."
    },
    "webhookUsed": true
  },
  "outputContexts": [
    {
      "lifespanCount": 1,
      "name": "windows_password_reset_duplicate-followup",
      "parameters": {
        "number": "706134",
        "number.original": "706134"
      }
    }
  ],
  "intent": {
    "isFallback": false,
    "displayName": "Otp_numbers",
    "id": "ca0bf210-4cac-412b-974a-f355ab750f45"
  }
}
 */