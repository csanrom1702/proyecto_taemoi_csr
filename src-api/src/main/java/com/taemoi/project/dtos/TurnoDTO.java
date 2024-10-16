package com.taemoi.project.dtos;

import com.taemoi.project.entidades.Turno;

public class TurnoDTO {
    
	private Long id;
    private String diaSemana;
    private String horaInicio;
    private String horaFin;
    private Long grupoId;

	public TurnoDTO() {
	}

	public TurnoDTO(Long id, String diaSemana, String horaInicio, String horaFin) {
		this.id = id;
		this.diaSemana = diaSemana;
		this.horaInicio = horaInicio;
		this.horaFin = horaFin;
	}
    
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDiaSemana() {
        return diaSemana;
    }

    public void setDiaSemana(String diaSemana) {
        this.diaSemana = diaSemana;
    }
  
    public String getHoraInicio() {
		return horaInicio;
	}

	public void setHoraInicio(String horaInicio) {
		this.horaInicio = horaInicio;
	}

	public String getHoraFin() {
		return horaFin;
	}

	public void setHoraFin(String horaFin) {
		this.horaFin = horaFin;
	}

	public Long getGrupoId() {
		return grupoId;
	}

	public void setGrupoId(Long grupoId) {
		this.grupoId = grupoId;
	}

	public static TurnoDTO deTurno(Turno turno) {
        if (turno == null) {
            return null;
        }

        TurnoDTO turnoDTO = new TurnoDTO();
        turnoDTO.setId(turno.getId());
        turnoDTO.setDiaSemana(turno.getDiaSemana());
        turnoDTO.setHoraInicio(turno.getHoraInicio());
        turnoDTO.setHoraFin(turno.getHoraFin());
        return turnoDTO;
    }
}