# Signup Validation Contract v1

## Scope
Detta kontrakt definierar gemensamma valideringsregler för signup i frontend och backend.
Backend är source of truth.

## Field Rules
1. firstName: required, trim, min 2.
2. lastName: required, trim, min 2.
3. email: required, trim, lowercase, valid email format, unique.
4. password: required, min 8, minst en stor bokstav, minst en liten bokstav och minst en siffra.
5. city: required, trim.
6. justifyMembership: required, trim, min 10.
7. workStatus: at least one option must be true.
8. workStatus.otherText: required when workStatus.other is true.

## Normalization Before Validation
1. Trim all text fields.
2. Trim and convert email to lowercase.
3. Keep empty string for required text fields unless explicitly optional.

## Error Codes
1. REQUIRED
2. INVALID_FORMAT
3. TOO_SHORT
4. TOO_LONG
5. INVALID_VALUE
6. EMAIL_TAKEN
7. CONDITIONAL_REQUIRED

## Backend Error Response Shape
Base shape:
```json
{
  "success": false,
  "message": "Validation failed",
  "fieldErrors": {
    "<field>": "<ERROR_CODE>"
  }
}
```

Relevanta felkoder per fält:

```json
{
  "success": false,
  "message": "Validation failed",
  "fieldErrors": {
    "firstName": [
      "REQUIRED",
      "TOO_SHORT"
    ],
    "lastName": [
      "REQUIRED",
      "TOO_SHORT"
    ],
    "email": [
      "REQUIRED",
      "INVALID_FORMAT",
      "EMAIL_TAKEN"
    ],
    "password": [
      "REQUIRED",
      "TOO_SHORT",
      "INVALID_FORMAT"
    ],
    "city": [
      "REQUIRED"
    ],
    "justifyMembership": [
      "REQUIRED",
      "TOO_SHORT"
    ],
    "workStatus": [
      "REQUIRED"
    ],
    "otherText": [
      "CONDITIONAL_REQUIRED"
    ],
    "allErrorCodes": [
      "REQUIRED",
      "INVALID_FORMAT",
      "TOO_SHORT",
      "EMAIL_TAKEN",
      "CONDITIONAL_REQUIRED"
    ]
  }
}
```

## Notes
1. fieldErrors innehåller en kod per fält (inte en lista).
2. workStatus.otherText mappas till otherText i responsen.
3. Forslaget ovan ar dokumentation av relevanta felkoder per falt, inte ett faktiskt runtime-svar.
4. TOO_LONG och är en generell kod som finns i mappningen, men de utloses inte av dagens signup-regler.

## Ownership
1. Backend is source of truth.
2. User-modellen definierar reglerna.
3. userRoutesValidated normaliserar input och mappar backendfel till fieldErrors.
4. signUpValidation.js i frontend speglar reglerna i backend for UX.
5. Rule changes must be updated in both layers in the same PR.
