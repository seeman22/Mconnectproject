export type notificationreports={
   
      
            sl_no: string;
  device_id: number;
  deviceNumber: string;
  device_name: string;
  device_code: string;
  meter_id: number;
  meter_code: string;
  meter_name: string;
  for_type: number;
  created_at: string;
  entry_status: string;
  typeName: string;
  on_time: string;
  off_time: string;
  reading_start: number;
  reading_end: number;
  alert_start_value: number;
  max_value: number;
  max_phase: number;
  max_phase_name: string; // Assuming this should be a string
  duration: number;
  total_consumption: number;
  date:string
    
   
  
}
export type filter={
    Todate:string,
      FromDate:string
}