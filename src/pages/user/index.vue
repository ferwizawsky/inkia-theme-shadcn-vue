<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ref, ref } from "vue";
import { listInvoices, Invoice } from "@/composables/data/invoice";

const page: Ref<number> = ref(1);
const search: Ref<string> = ref("");
const invoices: Ref<Invoice[]> = ref(listInvoices);

function getStatus(e: string) {
  if (e === "paid") {
    return "text-lime-600";
  }
  if (e === "pending") {
    return "text-amber-600";
  }
  return "text-rose-600";
}
</script>

<template>
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class=""> No. </TableHead>
        <TableHead class=""> Invoice </TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right"> Amount </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, index) in invoices">
        <TableCell>{{ (page - 1) * 10 + index + 1 }}</TableCell>
        <TableCell class="font-medium">
          {{ item.invoice }}
        </TableCell>
        <TableCell :class="getStatus(item?.paymentStatus?.toLowerCase())">{{
          item.paymentStatus
        }}</TableCell>
        <TableCell>{{ item.paymentMethod }}</TableCell>
        <TableCell class="text-right">
          {{ item.totalAmount }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
