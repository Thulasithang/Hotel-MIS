package com.WHotels.HotelMIS.table;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/table")    // important
class TableController {
    private final TableService tableService;

    @Autowired
    TableController(TableService tableService) {
        this.tableService = tableService;
    }

    @GetMapping
    public List<Table> getTables(){
        return tableService.getTables();
    }

    @PatchMapping("/update/{tableId}")
    public ResponseEntity<String> updateTableStatus(
            @PathVariable Long tableId,
            @RequestParam(value = "waiterRequested", required = false) Boolean waiterRequested,
            @RequestParam(value = "occupied", required = false) Boolean occupied) {
        System.out.println("Table id fron the front"+tableId.toString());
        System.out.println("Table id fron the front"+waiterRequested.toString());
        try {
            tableService.updateTableStatus(tableId, waiterRequested, occupied);
            return ResponseEntity.ok("Table status updated successfully: "+tableId.toString());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating table status: " + e.getMessage());
        }
    }




}
