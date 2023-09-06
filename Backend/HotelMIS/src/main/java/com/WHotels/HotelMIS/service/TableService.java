package com.WHotels.HotelMIS.service;
import org.springframework.data.domain.Sort;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.WHotels.HotelMIS.repository.TableRepository;
import com.WHotels.HotelMIS.model.Table;

import java.util.List;
import java.util.Optional;

@Service
public class TableService
{
    private final TableRepository tableRepository;

    @Autowired
    public TableService(TableRepository tableRepository) {
        this.tableRepository = tableRepository;
    }

    public List<Table> getTables(){
        Table t1=new Table(false,false);
        t1.setId(1);
        Table t2=new Table(false,false);
        t1.setId(2);
        //List.of(t1, t2)
        //Sort sort = Sort.by(Sort.Order.asc("table_id"));
        //return tableRepository.findAll();
        return tableRepository.findByOrderByNameAsc();
    //return tableRepository.findAll(Sort.by(Sort.Direction.ASC, "table_id"));
    }

    public void updateTableStatus(Long tableId, Boolean waiterRequested, Boolean occupied) {
        Optional<Table> optionalTable = tableRepository.findById(tableId);
        if (optionalTable.isPresent()) {
            Table table = optionalTable.get();
            if (waiterRequested != null) {
                table.setWaiterRequested(waiterRequested);
            }
            if (occupied != null) {
                table.setOccupied(occupied);
            }
            tableRepository.save(table);
        } else {
            throw new EntityNotFoundException("Table with ID " + tableId + " not found");
        }
    }

}
