// Local Imports
import { Page } from "@/components/shared/Page";
import { Card } from "@/components/ui";
import { HRTable } from "./table";

export default function ClientsPage() {
  return (
    <Page title="Clientes">
      <main className="grid w-full">
        <div className="w-full p-4 sm:px-5">
          <Card className="mt-5 rounded-lg p-4">
            <HRTable />
          </Card>
        </div>
      </main>
    </Page>
  )
}
