import React from 'react'
import {FcGoogle, FcPackage} from "react-icons/fc"
import {GoUpload, GoChevronRight, GoChevronDown} from "react-icons/go"
import {BiSolidTrain} from "react-icons/bi"
import { Button } from 'react-bootstrap'
import "./TicketTab.css"

export const TicketTab = () => {
  return (
    <div className="col-12 b-3 ">
      <div className='d-flex m-10'>
        <div className='num-ticket d-flex align-items-center'>
          <span className='text-blue-1'>Numer biletu</span>
          <span className='text-dark-1'>XX590455622</span>
        </div>
        <div className='ms-auto d-flex align-items-center'>
          <a className="custom-a" href="">TRASA TWOJEGO POCIĄGU</a>
          <a className='round-button' href="">
            <FcPackage id='round'/>
          </a>
          <a className='round-button align-items-center' href="">
            <GoUpload id='round'/>
          </a>
          <a className='round-button ' href="">
            <FcGoogle id='round'/>
          </a>
        </div>
      </div>
      <div className='d-flex m-10'>
        <div className='col'>
          <div className='d-flex mb-20'>
            <div className='d-flex flex-column flex-fill'>
              <span className='text-1'>Data</span>
              <span className='text-2'>11.08.2022</span>
            </div>
            <div className='d-flex flex-column flex-fill'>
              <span className='text-1'>Czas 2k 44min</span>
              <div className='d-flex align-items-center'>
                <span className='text-2 mr-5'>13:11</span>
                <GoChevronRight className='chevron-size orange mr-5'/>
                <span className='text-2 mr-5'>17:34</span>
              </div>
            </div>
            <div className='d-flex flex-column flex-fill'>
              <span className='text-1'>Klasa 1</span>
              <span className='text-2'>189,00 zł</span>
            </div>
          </div>
          <div className='d-flex flex-column'>
            <span className='text-1'>Trasa</span>
            <div className='d-flex align-items-center'>
              <span className='text-3'>Warszawa Cent.</span>
              <GoChevronRight className='chevron-size orange'/>
              <span className='text-3'>Kraków Gł.</span>
            </div>
            <div className='d-flex align-items-center'>
              <BiSolidTrain className='orange' style={{marginRight: '6px'}}/>
              <span> 2620</span>
            </div>
          </div>  
        </div>    
        <div className='col-4 d-flex flex-column'>
          <Button className='btn2 mb-10'>
            <span className='custom-span2'>POBIERZ PDF</span>
          </Button>
          <Button className='btn2'>
            <span className='custom-span2'>STWÓRZ PROFIL ZAKUPOWY</span>
          </Button>
        </div>
      </div>
      <div className="d-flex flex-row-reverse m-10 ">
        <Button className="m-0 custom-button-1 d-flex align-items-center">
          <a className="mr-5 custom-a" href="">INNE FUNKCJE DLA TEGO BILETU</a>
          <GoChevronDown id="round" className="orange"  />
        </Button>
      </div>

    </div>
  )
}
