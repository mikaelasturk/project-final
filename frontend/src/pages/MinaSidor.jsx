import { useState } from "react"
import styled from "styled-components"
import { FormInput } from "../components/reusable/ui/FormInput"

const PageTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  letter-spacing: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  margin-bottom: 48px;
`

const PageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px 40px;
  width: 45vw;
  position: relative;

  label {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: 15px;
  }

  input {
    font-size: 16px;
    height: 42px;
    padding: 0 12px;
  }
`

const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 8px;
`

const Section = styled.section``

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`

const EditButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.gold};
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 20px;
  cursor: pointer;
`

const SaveButton = styled.button`
  background: ${({ theme }) => theme.colors.gold};
  border: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 13px;
  padding: 8px 24px;
  border-radius: 20px;
  cursor: pointer;
  align-self: flex-end;
`

const ValueText = styled.p`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 16px;
  padding: 8px 0;
  border-bottom: 1px solid #444;
`

const FieldLabel = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: 13px;
  opacity: 0.7;
  display: block;
  margin-top: 12px;
`

export const MinaSidor = () => {
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState({
    namn: "",
    email: "",
    bank: "",
    xxx: "",
  })
  const [savedData, setSavedData] = useState({
    namn: "Test Testersson",
    email: "test.testersson@example.com",
    bank: "Bank of Test",
    xxx: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleEdit = () => {
    setFormData(savedData)
    setEditing(true)
  }

  const handleSave = (e) => {
    e.preventDefault()
    setSavedData(formData)
    setEditing(false)
  }

  return (
    <PageContent>
      <PageTitle>Mina Sidor</PageTitle>
      <Card as="form" onSubmit={handleSave}>
        <Section>
          <SectionHeader>
            <SectionTitle></SectionTitle>
            {!editing && <EditButton type="button" onClick={handleEdit}>Ändra</EditButton>}
          </SectionHeader>

          <SectionTitle style={{ marginTop: "16px" }}>Kontaktuppgifter</SectionTitle>
          {editing ? (
            <>
              <FormInput type="text" id="namn" name="namn" label="Namn:" value={formData.namn} onChange={handleChange} />
              <FormInput type="email" id="email" name="email" label="Email:" value={formData.email} onChange={handleChange} />
            </>
          ) : (
            <>
              <FieldLabel>Namn:</FieldLabel>
              <ValueText>{savedData.namn || "—"}</ValueText>
              <FieldLabel>Email:</FieldLabel>
              <ValueText>{savedData.email || "—"}</ValueText>
            </>
          )}

          <SectionTitle style={{ marginTop: "24px" }}>Betaluppgifter</SectionTitle>
          {editing ? (
            <>
              <FormInput type="text" id="bank" name="bank" label="Bank:" value={formData.bank} onChange={handleChange} />
              <FormInput type="text" id="xxx" name="xxx" label="XXX:" value={formData.xxx} onChange={handleChange} />
            </>
          ) : (
            <>
              <FieldLabel>Bank:</FieldLabel>
              <ValueText>{savedData.bank || "—"}</ValueText>
              <FieldLabel>XXX:</FieldLabel>
              <ValueText>{savedData.xxx || "—"}</ValueText>
            </>
          )}
        </Section>

        {editing && <SaveButton type="submit">Spara</SaveButton>}
      </Card>
    </PageContent>
  )
}

